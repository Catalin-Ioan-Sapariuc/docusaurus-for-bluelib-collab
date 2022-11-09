---
sidebar_position: 1
---

This type of recommender is not *personalized* to any specific user. In a sense, this type of recommender system is the simplest type of recommender. It provides the same recommendations to all users. This model can be useful in the *cold start* scenarios, in which we do not have any data regarding the personal preferences of a certain user. 

In order to make this non-personalized recommendation, we calculate a generic rating for each item, using the formula: 

(1) ![equation]( https://latex.codecogs.com/svg.image?R_{j}&space;=\frac{\sum\limits_{u=1}^{N_{j}}&space;r_{u{\rm&space;\;&space;}j{\rm&space;\;&space;}}&space;&space;&plus;\lambda&space;\mu&space;}{N_{j}&space;&plus;\lambda&space;} )  

where ![equation](https://latex.codecogs.com/svg.image?j=1..n_{items}), ![equation](https://latex.codecogs.com/svg.image?N_j) is the number of users that rated item j, ![equation](https://latex.codecogs.com/svg.image?r_{u&space;j&space;}) is the rating of item j by user u, and
![equation](https://latex.codecogs.com/svg.image?\mu&space;) is the overall mean (of all ratings). 

![equation](https://latex.codecogs.com/svg.image?\lambda) is a parameter that controls how much ![equation](https://latex.codecogs.com/svg.image?R_{j})  is affected by the overall mean of all ratings: 

if ![equation](https://latex.codecogs.com/svg.image?\lambda) is large 
( ![equation](https://latex.codecogs.com/svg.image?\lambda&space;\ge&space;5)) then ![equation](https://latex.codecogs.com/svg.image?R_{j}) is strongly affected by the global mean  ,  

if ![equation](https://latex.codecogs.com/svg.image?\lambda)  is small 
( ![equation](https://latex.codecogs.com/svg.image?\lambda&space;\ll&space;1) ) then 
![equation](https://latex.codecogs.com/svg.image?R_{j}) is only slightly affected by the global mean .  

Currently we take ![equation](https://latex.codecogs.com/svg.image?\lambda=1).  

After this rating is calculated, we sort the items descendingly, and provide the top *limit* recommendations. 
We use formula (1) instead of a simpler (say mean of each item formula) because such a simpler formula would be un-reliable if the number of ratings for that particular item is small.   

A more in depth description of formula (1) can be found in [1](https://www.researchgate.net/publication/328231954_Comparative_analysis_of_recommender_systems_and_its_enhancements) . 



Your site starts at `http://localhost:3000`.


