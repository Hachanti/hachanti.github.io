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

# Mermaid Diagrams

```mermaid
erDiagram
    PRODUCT {
        int ProductID PK
        string Name
        string Model
        double Price
    }

    CUSTOMER {
        int CustomerID PK
        string Name
        string Email
    }

    SALE {
        int SaleID PK
        date SaleDate
        int CustomerID FK
        int ProductID FK
        int Quantity
        double TotalPrice
    }

    INVENTORY {
        int InventoryID PK
        int ProductID FK
        int Quantity
    }
    CUSTOMER ||--o{ SALE : makes
    PRODUCT ||--o{ SALE : includes
    PRODUCT ||--|| INVENTORY : has

```
### Description
#### The relationship between the **Customer and Sale** is important to a business because that is what brings the business money. If the customer likes the product, then they will buy it, which causes a sale to happen, which is why this relationship is significant.

