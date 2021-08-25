# workshop
workshop

## Docker環境の構築
Dockerインストール手順：[Windows用](https://sukkiri.jp/technologies/virtualizers/docker/docker-win_install.html)、[Mac用](https://sukkiri.jp/technologies/virtualizers/docker/docker-mac_install.html)

Dockerfile
```
# 検証環境
FROM centos:centos7

# 必要なツールのインストール
RUN yum install -y git
```

上記のDockerfileを作成
Macの場合
```
vi Dockerfile
```

Windowsの場合

作成したDockerfileを元に環境を構築
```
# Dockerfileが置かれているディレクトリ上で以下のコマンドを実施
## Dockerfileを元にイメージを作成
sudo docker build -t git/git .

## イメージを元にコンテナを起動
sudo docker run -it git/git

## 起動したコンテナ上でgitのバージョンを確認
git --version
```

## 本リポジトリーのアプリをDocker環境で構築

### サービスの起動
```
$npm install
$npm start
```

### サービスの起動（開発変更即時反映）
```
$npm install
$./node_modules/nodemon/bin/nodemon.js
```

### Bootstrap3日本語リファレンス
http://bootstrap3.cyberlab.info/

### 備考
