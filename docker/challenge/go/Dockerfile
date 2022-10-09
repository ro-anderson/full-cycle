FROM golang:1.19.2-alpine3.16 as build
COPY ./rocks.go /go/rocks.go
RUN go build rocks.go

# This image is most useful in the context of building super minimal images 
FROM scratch
COPY --from=build /go/rocks /app/rocks
CMD ["/app/rocks"]
