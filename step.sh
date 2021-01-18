#!/bin/bash
set -ex
THIS_SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

npm install --prefix $THIS_SCRIPT_DIR xhr2 --save 
npm install --prefix $THIS_SCRIPT_DIR base-64 --save 

echo "This is the value specified for the input 'example_step_input': ${example_step_input} A"

echo ${BITRISE_GIT_BRANCH}
echo "Hello World!"
echo ${BITRISEIO_GIT_BRANCH_DEST}

#git checkout origin/${BITRISEIO_GIT_BRANCH_DEST}
#lastLMasterTag=$(git log --pretty=format:'%h' -n 1)
#echo $(lastLMasterTag)
git checkout ${BITRISE_GIT_BRANCH}
lastLBranchTag=$(git log --pretty=format:'%h' -n 1)
#echo $(lastLBranchTag)

#previousTag=$(git merge-base origin/${BITRISE_GIT_BRANCH} ${BITRISEIO_GIT_BRANCH_DEST})
#argument=$(git log --no-merges ${BITRISEIO_GIT_BRANCH_DEST}..)
#argument=$(git log ${BITRISE_GIT_BRANCH} --not $previousTag)
#argument=$(git log origin/master..origin/test)
#argument2=$(git cherry -v origin/master origin/test)

git checkout ${BITRISEIO_GIT_BRANCH_DEST}~1
lastLMasterTag=$(git log --pretty=format:'%h' -n 1)
  
changelog="$(git log --pretty=format:"%s" $lastLMasterTag...$lastLBranchTag)"

#echo $(changelog)
echo "--"
echo $changelog

#$THIS_SCRIPT_DIR/upload.js "${changelog}"

#
# --- Export Environment Variables for other Steps:
# You can export Environment Variables for other Steps with
#  envman, which is automatically installed by `bitrise setup`.
# A very simple example:
envman add --key AMINE_CHANGELOG --value $changelog
# Envman can handle piped inputs, which is useful if the text you want to
# share is complex and you don't want to deal with proper bash escaping:
#  cat file_with_complex_input | envman add --KEY EXAMPLE_STEP_OUTPUT
# You can find more usage examples on envman's GitHub page
#  at: https://github.com/bitrise-io/envman

#
# --- Exit codes:
# The exit code of your Step is very important. If you return
#  with a 0 exit code `bitrise` will register your Step as "successful".
# Any non zero exit code will be registered as "failed" by `bitrise`.
