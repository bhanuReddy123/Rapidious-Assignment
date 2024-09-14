# EpiRecipes Search Platform

## Rapidious Internship Assignment: Recipe Search Application

### objective
Develop a full-stack web application that indexes the "EpiRecipes" dataset into OpenSearch, provides a proof of working and  user-friendly interface for searching and filtering recipes, and demonstrates proficiency in React for frontend development, Python Django for backend development, and version control using GitHub.


## video Demo-walkthrough


## Key Technologies used
* OpenSearch
* Python Django
* React
* docker

## step by step set up instructions

1. install docker and docker-desktop in your local machine  [website link](https://docs.docker.com/desktop/install/windows-install/)

2. go to 'opensearch/' folder and run 
    ```sh
    docker-compose up 
    ```
3. go to 'opensearchBackend/' folder and run
    ```sh
    pip install -r requirements.txt
    python manage.py run server
    ```
4. go to 'frontendreact/' folder and run
    ```sh
    npm install
    npm run dev
    ```
---
## api documentation

* '/api/search/' -- GET
    * for serving search results
    * query params:
        * q: search query
        * calories_min:
        * calories_max:
        * protein_min: 
        * rating_min:
        * fat_min:   
        * page: int   

* '/api/suggestion/' -- GET
    * for search suggestions(auto complete)
    * query params:
        * q: search query


