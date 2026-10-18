$modelsDir = "C:\Users\kagan\Desktop\WebSite\public\models"
$models = Get-ChildItem -Path $modelsDir -Filter *.glb

foreach ($model in $models) {
    if ($model.Name -notmatch "-opt\.glb$") {
        $tempOut = "$($model.FullName).tmp"
        Write-Host "Compressing $($model.Name)..."
        
        # Bypass execution policy for npx
        cmd.exe /c "npx -y gltf-pipeline -i ""$($model.FullName)"" -o ""$tempOut"" -d"
        
        if (Test-Path $tempOut) {
            Move-Item -Path $tempOut -Destination $model.FullName -Force
            Write-Host "Success: $($model.Name)"
        } else {
            Write-Host "Failed to compress $($model.Name)"
        }
    }
}
Write-Host "Optimization complete!"
