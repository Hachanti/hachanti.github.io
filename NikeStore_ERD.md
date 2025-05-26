```mermaid
erDiagram
PRODUCT {
  Int PK Product ID
    String Product Name
    Double Product Price
}
CUSTOMER {
  Int PK Costomer ID
    String Costomer Name
    String Costomer Email
}
SALE {
  Int PK Sales ID
    Int FK Costomer ID
    Int FK Product ID
    Int Quantity
}
INVENTORY {
  Int PK Inventory ID
  Int FK Product ID
}
```
