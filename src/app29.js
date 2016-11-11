var app=angular.module('myApp',['ngSanitize']);

app.controller('MainController',function($sce){
                
                this.htmlData="Hello from <strong>Angularjs</strong>";
                this.dangerousScript="<script>console.log(\'Do something malicious\');</script>from the dangerous script";
                this.dangerousCSS='<span class="some-class" style="color:red">Hello from dangerous css</span>';
                this.trustedCSS=$sce.trustAsHtml('<span class="some-class" style="color:red">Hello from trusted css</span>')
                this.trustedScript=$sce.trustAsHtml("<script>console.log(\'Do something good\');</script>Hello from the safe script");
                });