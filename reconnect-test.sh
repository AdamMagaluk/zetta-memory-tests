#!/bin/bash

node server.js &
server_pid=$!

sleep 30
kill -USR2 $server_pid
start_mem=`ps -o rss -p $server_pid | sed -n '1!p'`

for i in `seq 1 10`;
do
    node reconnect-hub.js &
done

sleep 120

kill -USR2 $server_pid
end_mem=`ps -o rss -p $server_pid | sed -n '1!p'`

sleep 10

echo $start_mem $end_mem $(expr $end_mem - $start_mem)
kill $server_pid

echo "done"
