# Meow Search

This is a simple search engine. You can search for some soccer news from Premier League.  
Note that this project is currently under development, and is unstable. For security reasons, some of the files has been hidden.  



## Feature

- [x] Keyword highlight
- [ ] Content peek optimization
- [x] Theme change button
- [x] Search bar optimization



## Properties

### Data and searching

| Search Algorithm  | Liner search (O(n)) |
| ----------------- | ------------------- |
| DB Data Structure | Liner list          |
| DB item amount    | 1486                |
| DB                | sqlite3             |

### Tools and Deployment

| Server              | Nginx -> uWSGI -> django |
| ------------------- | ------------------------ |
| Back-end            | django                   |
| Front-end Framework | Bootstrap                |



## Implementation

It took me four days to implement this project. I spend six hours each day in development on average. If you are interested in the detailed procedure of my development, you will be interested in `dev_log.md` (written in Chinese).  

The list below shows what you need to do if you what to implement a search engine like this:  
1. Have basic knowledge of **Python, HTML, CSS and JavaScript**
2. Use **web crawler** to get data
3. Learn how to use **Bootstrap**, which will speed up your front-end development
4. Understand the basis of **django**, and also, you need to know something about database like **sqlite**

Then, you can certainly create a search engine just like what I have done. However, if you want to deploy it to a server, there are some extra procedures:  
1. Own a server
2. Learn some basic **Linux** command
3. Learn to use **Nginx**, maybe you can start with deploying a static website
4. Search for **uWSGI** documentations, and find a way to put uWSGI, Nginx and django together



## Problems

1. The data structure of my database has not been considered properly while initialization. The article text hasn't been separated properly, which has caused numerous problems, including article formatting.
