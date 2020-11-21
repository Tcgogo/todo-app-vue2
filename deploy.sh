# `deploy.sh`

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

git init
git add -A
git commit -m 'update commit'

git remote add origin https://gitee.com/tcgogo/todo-app-vue2.git
# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f origin master

cd -