---
sidebar_position: 2
---

An user based (personalized) collaborative recommender is a „true-and-tried” classical recommender system, still in use (although as part of more sophisticated systems) by sites such as Amazon, Netflix and Youtube. 
This method has two steps:
--  first, find a similarity measure ![equation](https://latex.codecogs.com/svg.image?S=\left(s_{u{\rm&space;\;&space;}v}&space;\right)) between users (a similarity matrix)
-- second, use this similarity matrix to predict the generic rating ![equation](https://latex.codecogs.com/svg.image?R_{u{\rm&space;\;&space;}i})  for user u and item i. 
The user similarity measure we use is a Pearson based similarity given by:  

(2)
![equation](https://latex.codecogs.com/svg.image?s_{u{\rm&space;\;&space;}v}&space;=\frac{\sum\limits_{j\in&space;\Psi&space;_{u{\rm&space;\;&space;}v}&space;}\left(r_{u{\rm&space;\;&space;j}}&space;-\bar{r}_{u}&space;\right)\left(r_{v{\rm&space;\;&space;j}}&space;-\bar{r}_{v}&space;\right)&space;}{\sqrt{\sum\limits_{j\in&space;\Psi&space;_{u{\rm&space;\;&space;}v}&space;}\left(r_{u{\rm&space;\;&space;j}}&space;-\bar{r}_{u}&space;\right)^{2}&space;&space;}&space;\sqrt{\sum\limits_{j\in&space;\Psi&space;_{u{\rm&space;\;&space;}v}&space;}\left(r_{{\rm&space;v\;&space;j}}&space;-\bar{r}_{v}&space;\right)^{2}&space;&space;}&space;}&space;)

, 
where 

![equation](https://latex.codecogs.com/svg.image?&space;\psi_{u&space;v}&space;=&space;\text{set&space;of&space;items&space;rated&space;by&space;both&space;users&space;u&space;and&space;v})  

![equation](https://latex.codecogs.com/svg.image?\bar{r}_{u}&space;\text{&space;and&space;}&space;\bar{r}_{v}&space;=&space;\text{average&space;of&space;all&space;ratings&space;for&space;user&space;u&space;and&space;user&space;v,&space;respectively})

![equation](https://latex.codecogs.com/svg.image?\bar{r}_{u&space;j}&space;=&space;\text{rating&space;of&space;item&space;j&space;by&space;user&space;u}) 

![equation](https://latex.codecogs.com/svg.image?\bar{r}_{v&space;j}&space;=&space;\text{rating&space;of&space;item&space;j&space;by&space;user&space;v})

Basically the similarity ![equation](https://latex.codecogs.com/svg.image?s_{u&space;v})  measures the cosine of the angle between the „deviations”   
![equation](https://latex.codecogs.com/svg.image?r_{u&space;:}-\bar{r}) and ![equation](https://latex.codecogs.com/svg.image?r_{v&space;:}-\bar{r})   over the set of rated items (which is also the correlation between these two datasets) . 

The prediction ![equation](https://latex.codecogs.com/svg.image?R_{u{\rm&space;\;&space;}i}) is then calculated using the formula: 

(3) 
![equation](https://latex.codecogs.com/svg.image?R_{u{\rm&space;\;&space;i}}&space;=\bar{r}_{u}&space;&plus;\frac{\sum\limits_{v\in&space;\psi&space;_{i}&space;}^{}s_{u{\rm&space;\;&space;}v{\rm&space;\;&space;}}&space;\left(r_{v{\rm&space;\;&space;}i}&space;-\bar{r}_{v}&space;\right)&space;}{\sum\limits_{v\in&space;\psi&space;_{i}&space;}^{}\left|s_{u{\rm&space;\;&space;}v{\rm&space;\;&space;}}&space;\right|&space;}&space;)
									(user based prediction formula) 

where           

![equation](https://latex.codecogs.com/svg.image?&space;\bar{r}_{u}&space;\text{&space;and&space;}&space;\bar{r}_{v}&space;=&space;\text{&space;average&space;of&space;all&space;ratings&space;for&space;user&space;u&space;and&space;user&space;v&space;respectively}) 

![equation](https://latex.codecogs.com/svg.image?&space;\psi_{i}&space;=\text{set&space;of&space;all&space;users&space;that&space;have&space;rated&space;item&space;}&space;i&space;\text{&space;(except&space;user&space;}&space;u&space;)&space;&space;) 

![equation](https://latex.codecogs.com/svg.image?r_{v{\rm&space;\;&space;}i{\rm&space;\;&space;}}&space;=&space;\text{rating&space;of&space;item&space;}&space;i&space;\text{&space;by&space;user&space;}v&space;&space;)

We make a further refinement of formula (3) by considering only the top (K) most similar users to the target user u. In our runs we considered K=25. 

After the predicted ratings ![equation](https://latex.codecogs.com/svg.image?R_{u{\rm&space;\;&space;}i})  are calculated, we sort descendingly the ratings for each user, and provide the top *limit* recommendations of those items not already rated by user u.
