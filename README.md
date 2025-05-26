# hachanti.github.io

Name: Hansika Achanti
Email: Hachanti@my.waketech.edu
Description of Account: This is my school account
Description of repository: This repository with hold my assignments

# About Me

## My Interests  
* Badminton
* Art 
## Websites I Recommend
* [Google Slides](https://workspace.google.com/products/slides/): It is a very good website to use to make presentations

```mermaid
erDiagram
PRODUCT {
  Int PK Product_ID
    String Product_Name
    Boolean Product_Price
}
CUSTOMER {
  Int PK Costomer_ID
    String Costomer_Name
}
SALE {
  Int Sale ID
    Int FK Costomer_ID
    Int FK Product_ID
}
INVENTORY {
  Int Inventory ID
    Int FK Product_ID
    Int Quantity
}
```


