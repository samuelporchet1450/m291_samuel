param(
    [string]$RootDir = "C:\Users\Student\Downloads\Redline",
    [int]$Port = 0
)

# Le port est fourni par la variable d'environnement PORT (attribuée automatiquement),
# sinon par le paramètre -Port, sinon 8080 par défaut.
if ($Port -eq 0) {
    if ($env:PORT) { $Port = [int]$env:PORT } else { $Port = 8080 }
}

Add-Type -AssemblyName System.Net.HttpListener -ErrorAction SilentlyContinue

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $RootDir on http://localhost:$Port/"

$mime = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css"
    ".js"   = "application/javascript"
    ".svg"  = "image/svg+xml"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".gif"  = "image/gif"
    ".ico"  = "image/x-icon"
    ".json" = "application/json"
    ".txt"  = "text/plain; charset=utf-8"
    ".xml"  = "application/xml; charset=utf-8"
    ".pdf"  = "application/pdf"
    ".webp" = "image/webp"
}

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    try {
        $path = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
        if ($path -eq "/") { $path = "/index.html" }
        $filePath = Join-Path $RootDir ($path.TrimStart("/"))

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [IO.Path]::GetExtension($filePath).ToLower()
            $contentType = $mime[$ext]
            if (-not $contentType) { $contentType = "application/octet-stream" }
            $bytes = [IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $notFound = [Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
        }
    } catch {
        $response.StatusCode = 500
    } finally {
        $response.OutputStream.Close()
    }
}
