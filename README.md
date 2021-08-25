# workshop
workshop

## Docker環境の構築
#### ⓪前提
以下の手順に従ってDockerをインストールしてください。
Dockerインストール手順：[Windows用](https://sukkiri.jp/technologies/virtualizers/docker/docker-win_install.html)、[Mac用](https://sukkiri.jp/technologies/virtualizers/docker/docker-mac_install.html)

#### ①Dockerfileを作成
Macの場合
```
vi Dockerfile
```

Windowsの場合
```
# Windows PCないので仮置き（たぶんメモ帳にでも書けばできる）
```

Dockerfile
```
# 検証環境
FROM centos:centos7

# 必要なツールのインストール
RUN yum install -y git
```

#### ②作成したDockerfileを元に環境を構築
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
#### ①以下のDockerfileをローカル上に作成

Dockerfile
```
# 検証環境
FROM centos:centos7

# 必要なツールのインストール
RUN yum install -y epel-release
RUN yum install -y nodejs npm
RUN yum install -y git

# アプリの取得＆実行準備
RUN git clone https://github.com/sisbs1cs2/one_sakura_sample.git
RUN cd /one_sakura_sample; npm install
EXPOSE 8080

# コンテナ起動時のコマンド
WORKDIR /one_sakura_sample
CMD npm start
```

#### ②作成したDockerfileを元に環境を構築
```
## Dockerfileを元にイメージを作成
sudo docker build -t one_sakura_sample/one_sakura_sample .

## イメージを元にコンテナを起動
sudo docker run -it one_sakura_sample/one_sakura_sample
```

### サービスの起動
```
$npm install
$npm start
```

#### ③ブラウザから起動したアプリの動作確認


## Bootstrap3日本語リファレンス
http://bootstrap3.cyberlab.info/
