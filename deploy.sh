#!/bin/bash

bucket=$1

cd $(dirname $0)/dist

aliyuncli oss Config --host oss-cn-shanghai.aliyuncs.com --accessid ${accessid} --accesskey ${accesskey}

no_cache_files="\(.*\.html$\)"

max_age=$((3600))

find . -type f | grep -v ${no_cache_files} | cut -c3- | xargs -I {} aliyuncli oss Put {} oss://${bucket}/{} --headers "Cache-Control: public, max-age=${max_age}"
find . -type f | grep ${no_cache_files} | cut -c3- | xargs -I {} aliyuncli oss Put {} oss://${bucket}/{} --headers "Cache-Control: no-cache, no-store, must-revalidate"
