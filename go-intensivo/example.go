package main

import "fmt"

type Order struct {
	ID       string
	Price    float64
	Quantity int
}

func (o *Order) SetPrice(price float64) {
	o.Price = price
	fmt.Println("Price dentro do setPrice: ", o.Price)
}

func (o Order) geTotal() float64 {
	return o.Price * float64(o.Quantity)
}

func NewOrder() *Order {
	return &Order{}
}

func main() {

	order := NewOrder()
	order.ID = "123"
	order.Quantity = 10
	order.Price = 10.0

	order2 := order
	order.Price = 5
	fmt.Println(order2.Price)
	fmt.Println(order, order2)

}
