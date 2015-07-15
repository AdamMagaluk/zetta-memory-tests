#!/bin/bash

for i in `seq 1 $1`;
do
    node reconnect-hub.js &
done

wait;
