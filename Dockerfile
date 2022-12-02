# syntax=docker/dockerfile:1

FROM golang:1.19-alpine3.16 AS builder

RUN mkdir /build
WORKDIR /build

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY . ./
RUN ls
RUN ls
RUN go build -o ./server
ENV PATH="./.env"

RUN pwd

# generate clean, final image for end users
FROM alpine:3.16
RUN pwd
COPY --from=builder /build/server .

EXPOSE 8081
# executable
ENTRYPOINT [ "./server" ]
# arguments that can be overridden
CMD [ ]