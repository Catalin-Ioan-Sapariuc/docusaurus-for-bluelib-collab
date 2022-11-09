---
sidebar_position: 0
id: intro
---

# Description of Models
## BlueLibs Recommendation System 

This document provides a brief description of the models implemented in the BlueLibs Recommender system. 

### A. What are recommender systems ?

In simple terms, recommender systems are algorithms aimed at suggesting relevant items to users 
(items can be movies to watch, books to read or other products, depending on industry).   

More generally, recommender systems are often used to find simmilarities for items or users, 
and can be applied in diverse fields such as e-commerce, e-learning or social media. 


### B. Description of the models implemented in the BlueLibs Recommender system:

At this time, there are three types of recommendation models implemented: 
#### a)	A non-personalized (or popularity based) recommender

#### b)	Two collaborative, also called memory based recommenders:
##### b1) User based recommender


##### b2) Item based recommender


Input-Output of the models: 

The current BlueLibs recommendation systems takes as input a .csv file of available ratings (identified by a pair *(user,item)*), 
a *limit* (number of desired ratings), and a *queried user* for which the ratings are desired (for the collaborative models).

The output is a dictionary with items of the form *{item:rating}* (of size *limit*).
