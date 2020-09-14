# Meow Search

This is a simple search engine. You can search for some soccer news from Premier League.  
Note that this project is currently under development, and is unstable. For security reasons, some of the files has been hidden.  



## Feature

- [x] Keyword highlight
- [ ] Content peek optimization
- [ ] Theme change button
- [ ] Search bar optimization



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
0. Have basic knowledge of **Python, HTML, CSS and JavaScript**
1. Use **web crawler** to get data
2. Learn how to use **Bootstrap**, which will speed up your front-end development
3. Understand the basis of **django**, and also, you need to know something about database like **sqlite**

Then, you can certainly create a search engine just like what I have done. However, if you want to deploy it to a server, there are some extra procedures:  
0. Own a server
1. Learn some basic **Linux** command
2. Learn to use **Nginx**, maybe you can start with deploying a static website
3. Search for **uWSGI** documentations, and find a way to put uWSGI, Nginx and django together.