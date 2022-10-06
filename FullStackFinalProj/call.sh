NEWS="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

echo "Pulling top stories from $NEWS"

curl -s "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty" | jq -c .[] > list.txt
#list=$(<~/FullStackFinalProj/list.txt)

#echo $list

while read -r line
do
	curl -s https://hacker-news.firebaseio.com/v0/item/$line.json?print=pretty
done < ~/FullStackFinalProj/list.txt



