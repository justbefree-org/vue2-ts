#!/bin/bash
# @Author: Just be free
# @Date:   2020-08-17 15:45:37
# @Last Modified by:   Just be free
# @Last Modified time: 2020-08-17 16:59:27
function getSystem {
  system=`uname`
  echo ${system}
}
function gitBranch {
  br=`git branch | grep "*"`
  echo ${br/* /}
}
function gitName {
  br=`git config user.name`
  echo ${br}
}
projectNo=`cat ./auto/projectNo`
currentBranch=`gitBranch`

envirnoment=""

while getopts "E:" arg
do
  case $arg in
    E)
      envirnoment=$OPTARG
      ;;
    ?)
      echo "unknown arguments"
      exit 1
      ;;
    esac
done
if [[ "$envirnoment" == "" ]]; then
  cd ..
  echo "Please enter the envirnoment: [release, test, dev]"
  read envirnoment
fi

validString="release,test,dev"
validEnvirnoment=$(echo $validString | grep "${envirnoment}")
if [[  "$validEnvirnoment" == "" ]]; then
  echo "Invalid envirnoment, the valid envirnoment should be one of [release, test, dev]"
  exit 0
fi
echo "The envirnoment is $envirnoment"
tag="$envirnoment$(date '+%Y%m%d%H%M%S')"
# cd ..
echo "auto tag"
echo -e "Hello, \033[32;49;1m`gitName`\033[39;49;0m"

function modifyConfigFile {
  if [[ `getSystem` == "Darwin" ]]; then
    #statements
    sed -i "" "s/.*version.*/  version: 'The current version is $1 from `gitBranch` branch, published by `gitName`',/" ./src/config/$2.ts
  else
    sed -i "s/.*version.*/\tversion: 'The current version is $1 from `gitBranch` branch, published by `gitName`',/" ./src/config/$2.ts
  fi
}
modifyConfigFile $tag $envirnoment
git add .
git commit -m "new tag $tag published by `gitName`" --no-verify
git push
if [ $? != 0 ]; then
  git push origin $currentBranch -u
fi
git tag "$tag" -a -m "$tag"
git push origin "$tag"
# git push origin --tags
echo "Successfully taged"
echo "##########################################"

echo -e "         \033[32;49;1m$tag $projectNo\033[39;49;0m"

echo "##########################################"

