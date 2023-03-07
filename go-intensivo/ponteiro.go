package main

import "fmt"

func main() {
	a := 10
	b := &a

	fmt.Println(b)

	a = 20

	fmt.Println(a)
	fmt.Println(*b)

	*b = 30

	fmt.Println(a)
	fmt.Println(*b)

}
