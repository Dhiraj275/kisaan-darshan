git add .
if ["$1" -eq ""]
then 
	echo "Enter the commit string"
else
	git commit -m "$1"
	git push
fi
exit
