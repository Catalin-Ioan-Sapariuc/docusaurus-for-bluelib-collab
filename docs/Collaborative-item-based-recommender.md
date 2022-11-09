---
sidebar_position: 3
---

## Collaborative item based recommender

The item based collaborative filtering is theoretically very similar to the user-based collaborative filtering method b1. 

In practice, however, this method is preferable because it is less computationally intensive and it tends to produce lower RMSE’s. 

It comprises the same steps as b1, but it views the items as „main objects” now, therefore:

--   first, we find a similarity measure ![equation](https://latex.codecogs.com/svg.image?S=\left(s_{{\rm&space;i\;&space;j}}&space;\right)) between items (a similarity matrix) using the formula:

	(4)
![equation](https://latex.codecogs.com/svg.image?s_{{\rm&space;i\;&space;j}}&space;=\frac{\sum\limits_{u\in&space;\Psi&space;_{{\rm&space;i\;&space;j}}&space;}\left(r_{u{\rm&space;\;&space;i}}&space;-\bar{r}_{i}&space;\right)\left(r_{{\rm&space;u\;&space;j}}&space;-\bar{r}_{j}&space;\right)&space;}{\sqrt{\sum\limits_{u\in&space;\Psi&space;_{{\rm&space;i\;&space;j}}&space;}\left(r_{u{\rm&space;\;&space;i}}&space;-\bar{r}_{i}&space;\right)^{2}&space;&space;}&space;\sqrt{\sum\limits_{u\in&space;\Psi&space;_{{\rm&space;i\;&space;j}}&space;}\left(r_{{\rm&space;u\;&space;j}}&space;-\bar{r}_{j}&space;\right)^{2}&space;&space;}&space;}&space;&space;&space;&space;&space;&space;&space;)
where 

![equation](https://latex.codecogs.com/svg.image?\psi_{{\rm&space;i\;&space;j}}&space;=&space;\text{set&space;of&space;users&space;that&space;rated&space;both&space;items&space;}&space;i&space;\text{&space;and&space;}&space;j&space;&space;&space;&space;&space;)

![equation](https://latex.codecogs.com/svg.image?\bar{r}_{i}&space;\text{&space;and&space;}&space;\bar{r}_{j}&space;=&space;\text{&space;average&space;of&space;all&space;ratings&space;for&space;items&space;i&space;and&space;j,&space;respectively}) 

![equation](https://latex.codecogs.com/svg.image?r_{u{\rm&space;\;&space;i\;&space;}}&space;=&space;\text{rating&space;of&space;item&space;i&space;by&space;user&space;u}) 

![equation](https://latex.codecogs.com/svg.image?r_{u{\rm&space;\;&space;j\;&space;}}&space;=&space;\text{rating&space;of&space;item&space;j&space;by&space;user&space;u}) 

--  based on this similarity matrix we calculate ![equation](https://latex.codecogs.com/svg.image?R_{u{\rm&space;\;&space;}i})  = a predicted rating for user u and item i, using the formula: 

(5)
![equation](https://latex.codecogs.com/svg.image?R_{u{\rm&space;\;&space;i}}&space;=&space;\bar{r}_{i}&space;&plus;\frac{\sum\limits_{j\in&space;\psi&space;_{i}&space;}^{}s_{{\rm&space;j\;&space;i\;&space;}}&space;\left(r_{{\rm&space;u\;&space;j}}&space;-\bar{r}_{j}&space;\right)&space;}{\sum\limits_{j\in&space;\psi&space;_{i}&space;}^{}\left|s_{{\rm&space;j\;&space;i\;&space;}}&space;\right|&space;}&space;&space;) 

(item based prediction formula) , 
where  

![equation](https://latex.codecogs.com/svg.image?\psi&space;_{i}&space;=&space;\text{set&space;of&space;all&space;items&space;that&space;user&space;u&space;has&space;rated&space;(except&space;item&space;j)}&space;)

and the meanings of the other quantities are similar with those from formula (3). 

Once again, we make a further refinement of formula (5) by considering only the top (K) most similar items with the target item i. In our runs we considered K=25.

Similar with the user-based algorithm, after the predicted ratings are calculated, we sort descendingly the ratings for each user, and provide the top *limit* recommendations of those items not already rated by user u. 
