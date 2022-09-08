#! /bin/bash
function build()
{
    docker pull xxx || {
        echo "start to rebuild denpendency"
        docker-compose build denpendency
        docker tag source source-tag
        docker push 
        echo "finished build dependcy"
    }

    docker-compose build 
}