---
sidebar_position: 4
---

## Tests and Results
It has typically been reported in literature (see, for example 4) that the user-based and item-based algorithms perform similarly in terms of RMSE, where:

(6)
![equation](https://latex.codecogs.com/svg.image?\text{RMSE}&space;=&space;\sqrt{\frac{1}{n}&space;\sum&space;_{u,j}^{}\left(R_{u{\rm&space;\;&space;}j}&space;-r_{{}_{u{\rm&space;\;&space;}j}&space;}&space;\right)^{2})
 
, where  
![equation](https://latex.codecogs.com/svg.image?r_{u{\rm&space;\;&space;j}}&space;\text{&space;is&space;the&space;exact&space;(known)&space;rating&space;of&space;user&space;u&space;for&space;item&space;j&space;}&space;)  
![equation](https://latex.codecogs.com/svg.image?R_{u{\rm&space;\;&space;j}}&space;\text{&space;is&space;the&space;predicted&space;rating&space;of&space;user&space;u&space;for&space;item&space;j})

(see, for example [4](http://www.diva-portal.org/smash/get/diva2:1111865/FULLTEXT01.pdf) ). 

From a practical point of view, however, item-based recommenders are often preferred in systems where the number of users surpasses the number of items. In addition, in a typical real world scenario, the user base needs to update more often than the item base, which would require an increased computational load on a user based system. 

Our own computational results show that the RMSE for the item based recommender is slightly smaller than the RMSE for the user based recommender in all test cases. 

Specifically, we performed runs on a PC with 2.4 GHz nominal (4.8 Ghz max in turbo mode) Intel 8 cores I7 processor, 32 GB RAM computer. We have tested the algorithms for standard Movie Lens (https://grouplens.org/datasets/movielens/ ) datasets with 100 K ratings , 1 million and 10 millions ratings. 

The results are shown in the tables below (we denote nu = number of users and ni =number of items for each case):
 

c1) MovieLens 100K (dataframe with 100 000 rows) (nu=943 , ni=165) 


| Algorithm	  | Train RMSE	|   Training time	|    RAM space needed   | 
|------------ | ----------- | ----------------- | --------------------- | 
| User based  |	   0.89		|    0.26 secs	    |   [45MB, 100MB]       |    
| Item based  |	   0.87		|    0.39 secs	 	|   [45MB, 100MB]       |


c2) Movielens 1M  (dataframe with 1 000 000 rows): (nu=6040, ni=3706):

| Algorithm	  | Train RMSE	|   Training time	|    RAM space needed   | 
|------------ | ----------- | ----------------- | --------------------- | 
| User based  |	   0.88		|    21 secs	    |        ~728 MB        |    
| Item based  |	   0.86		|    19 secs	 	|        ~728 MB        |



c3) Movielens 10M  (dataframe with 10 000 000 rows) (nu=69878, ni= 10677 ): 


| Algorithm	  | Train RMSE	|   Training time	|    RAM space needed   |   Observations  |
|------------ | ----------- | ----------------- | --------------------- | --------------- |
| User based  |	   		    |    	            |        ~35 GB         |   Out of memory message: "unable to allocate 36.4 GB is space for the similarity matrix" |
| Item based  |	   0.85		|    ~ 5 mins	 	|        ~15 GB        |                  |






