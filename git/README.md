#### git 版本控制

* 本地仓库构建：
```
    git init
    touch README.md
    git add .
    git commit -m "first commit"

```
* 远程仓库构建：
```

    git remote add origin [仓库地址]
    git push -u origin master

```

将以上两部分合起来（单人远程版本控制）
```
    git init
    touch README.md
    git add .
    git commit -m "first commit"
    git remote add origin [仓库地址]
    git push -u origin master

    //再次操作时只需要对修改的文件作如下处理
    git add .
    git commit
    git pull
    git push

```

### 多人协作时，可能需要处理版本冲突的问题

```
    git add .
    git commit  
    git pull //=>git fetch + git merge
    //冲突了，解决完冲突的文件再次
    git add .
    git commit
    git push  

```

若是冲突的文件过多，这样解决冲突起来比较费劲和危险，可作如下处理

```
    git add .
    git commit

    git fetch
    git rebase
    //以上两句合为一句 git pull --rebase
    //冲突了，解决完冲突的文件后
    git rebase --continue // 直到所有的冲突文件都处理完
    git rebase --abort //终止rebase，当前分支并回到rebase 前的状态
    git add .
    git push  

```

* 改写提交 （本地代码）

```
    git log // 查看commit 提交的记录
    git reset [commit 版本号] //只是取消掉制定版本提交记录，代码不变
    git reset --hard [commit 版本号] //从磁盘内存中取消掉指定版本提交记录，代码会恢复到未提交时的状态

    // 若是使用git reset --hard删掉了本地指定版本的代码记录，还是可以找回的，操作如下
    git reflog
    git reset --hard [commit 版本号]

    git revert HEAD // 撤销一个提交的同时会创建一个新的提交，当作撤销已经提交的更改

```

* branch

```
    git branch [branch name] // 新建分支
    git checkout [branch name] // 切换分支
    git checkout -b [branch name] // 新建并切换分支

    git branch //  查看本地分支
    git branch -a // 查看所有分支

    git merge [branch name] //合并分支
    git branch -d [branch name] //删除分支
    git branch -D [branch name] //强制删除分支

    git origin :[origin branch name] //删除远程分支

```

* push

```
    // push 到指定的远程仓库
    git push [repository name] [local branch name]:[origin branch name]

```

* 常用的
```
    git status -sb // 查看状态
    git log // 查看提交记录
    git log --graph // 查看提交记录提交树
    git stash // 暂存当前的工作区内容

```
