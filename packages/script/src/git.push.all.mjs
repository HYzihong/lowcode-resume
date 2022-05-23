#!/usr/bin/env zx

// vim project/.git/config

/*
[remote "origin"]
        url = git@github.com:HYzihong/lowcode-resume.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[remote "gitee"]
        url = git@gitee.com:HYzihong/lowcode-resume.git
        fetch = +refs/heads/*:refs/remotes/origin/*       
*/

// 同时推到gitee 和 github
await $`git push; git push gitee`;
