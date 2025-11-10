# 🚀 Migration Report

## 📌 Version: 11.13

- Updated .gitignore with new patterns `[generated-react-app/**, src/main/webapp/design-tokens/temp-tokens, src/main/webapp/design-tokens/app.override.css]`


- Added new default file `package-override.json` to /build-src/
- Added new default file `eslintrc-override.js` to /build-src/


- Updated ui-build.js file
- Updated build.xml file


## 📌 Version: 11.11

- Added enableSkipToMainContent property with default value as false in .wmproject.properties
- Added enablePrettification property with value default as true in .wmproject.properties


## 📌 Version: 11.10

- Updated ui-build.js file with fixes supporting concurrent builds


- Updated apache http logger package from org.apache.http.client to org.apache.hc.client5 in log4j2.xml


- Updated optimizeUIBuild default value to false in build.xml file


## 📌 Version: 11.9

- Updated ui-build.js and build.xml files


- Migrated authProviders configuration from map to list format in auth-info.json file


- Added languageBundleSources and serviceDefSources property with value as STATIC in .wmproject.properties
- Added app.apiUrl property in app.properties and made it configurable from all profile property files with empty value as default


- Deleted Dockerfile.build file
- Updated Dockerfile which simplifies WaveMaker App Docker Image creation


## 📌 Version: 11.8

- Updated maven version from `3.9.8-eclipse-temurin-11` to `3.9-eclipse-temurin-21` in `Dockerfile.build` file 
- Updated tomcat version from `9.0.83-jdk11-temurin` to `10-jdk21-temurin` in `Dockerfile` file 


- Updated `web.xml` file attributes from javax to Jakarta
- Updated Javax to Jakarta in `13` java file(s)


## 📌 Version: 11.7

- Removed objectMapper usages in `4` ServiceImpl classes across `1` Database Service(s)


- Added the pattern `src/main/webapp/WEB-INF/prefabs/**/page.min.json` to `.gitignore` file


- Added new file `font.config.js` to src/main/webapp folder


- Updated maven version from `3.9.6` to  `3.9.8` in `Dockerfile.build` file 


