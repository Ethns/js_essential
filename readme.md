## Revision of javascript basics
http://localhost:8080/js_essetial.html

## Retrieve people JSON array from backed node live-server
run:   
`npm install -g live-sever` to install node js live-server globally  
`live-server` under project folder  
Browser opens: http://localhost:8080/  
`ctrl+z` to detach live-server process and put it to stop in background  
`bg` resume live-server process and run it as a background process  
`fg` to bring the process back to front   
______
```bash
ethans@ethans-hen:~/apps/nodejs_workspace/js_essential$ live-server
Serving "/home/ethans/apps/nodejs_workspace/js_essential" at http://127.0.0.1:8080
Ready for changes
^Z
[1]+  Stopped                 live-server
ethans@ethans-hen:~/apps/nodejs_workspace/js_essential$ bg
[1]+ live-server &
ethans@ethans-hen:~/apps/nodejs_workspace/js_essential$ jobs
[1]+  Running                 live-server &
ethans@ethans-hen:~/apps/nodejs_workspace/js_essential$ fg
live-server
Change detected /home/ethans/apps/nodejs_workspace/js_essential/readme.md
```
