#!/bin/bash
# @Author: Just be free
# @Date:   2020-08-17 15:45:37
# @Last Modified by:   Just be free
# @Last Modified time: 2020-08-20 18:08:56
function gitUpdate {
  git add .
  git commit -m "new tag $1 published by `gitName`" --no-verify
  git push
  if [ $? != 0 ]; then
    git push origin $2 -u
  fi
  git tag "$1" -a -m "$1"
  git push origin "$1"
  # git push origin --tags
  echo "Successfully taged"
  echo "##########################################"

  echo -e "         \033[32;49;1m$1 $3\033[39;49;0m"

  echo "##########################################"
}
function modifyConfigFile {
  if [[ `getSystem` == "Darwin" ]]; then
    #statements
    sed -i "" "s/.*version.*/  version: 'The current version is $1 from `gitBranch` branch, published by `gitName`',/" ./src/config/$2.ts
  else
    sed -i "s/.*version.*/\tversion: 'The current version is $1 from `gitBranch` branch, published by `gitName`',/" ./src/config/$2.ts
  fi
}
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
projectNo=`cat ./auto/projectNo`
validString="release,test,dev"
validEnvirnoment=$(echo $validString | grep "${envirnoment}")
if [[  "$validEnvirnoment" == "" ]]; then
  echo "Invalid envirnoment, the valid envirnoment should be one of [release, test, dev]"
  exit 0
fi
echo "The envirnoment is $envirnoment"
tag="$envirnoment$(date '+%Y%m%d%H%M%S')"
echo "auto tag"
echo -e "Hello, \033[32;49;1m`gitName`\033[39;49;0m"

modifyConfigFile $tag $envirnoment

gitUpdate $tag $currentBranch $projectNo


