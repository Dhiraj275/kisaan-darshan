git add .
if ["$1" -eq ""]
then 
	echo "Enter the commit string"
else
	git commit -m "$1"
	echo -ne '#####                     (33%)\r'
	sleep 1
	echo -ne '#############             (66%)\r'
	sleep 1
	echo -ne '#######################   (100%)\r'
	echo -ne '\n'
	git push
fi
exit
