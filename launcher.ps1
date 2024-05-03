# write-output "Ppkaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah!!"

ii C:\xampp\xampp_start.EXE 

wt --window 0 -p "Windows Powershell" -d . powershell -noExit "php artisan serve"`;  new-tab -p "Windows Powershell" -d . powershell -noExit "npm run watch";
timeout /t 10
START http://localhost:8000/