package main

import (
	"fmt"
	"time"
)

func task(name string) {
	for i := 0; i < 10; i++ {
		fmt.Println(name, ":", i)
		time.Sleep(time.Second)
	}

}

func main() {
	task("Tarefa 1")
	task("Tarefa 2")
	task("Tarefa 3")
}
