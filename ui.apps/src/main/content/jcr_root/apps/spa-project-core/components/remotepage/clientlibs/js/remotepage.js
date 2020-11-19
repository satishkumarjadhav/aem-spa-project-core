/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

 (function(){
     const domain = document.body.dataset.remoteUrl || 'http://localhost:3000/';
     if(domain) {
         fetch(domain + 'asset-manifest.json')
           .then(response => response.json())
           .then(asset => {
             asset.entrypoints.forEach(item => {
                const filePath = domain + "" + item;
         		if(item.indexOf('.css') >0) {
         		  const link = document.createElement("link");
           		  link.type = "text/css";
                   link.rel = "stylesheet";
                   link.href = filePath;

           		  document.head.appendChild(link);
         		} else {
          			const script = document.createElement("script");
                     script.type = "text/javascript";
                     script.src = filePath;
                     script.crossOrigin = '';
                     document.body.appendChild(script);
                 }
             });
         });
     }
 })();