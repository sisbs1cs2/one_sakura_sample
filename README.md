# workshop
workshop

## アプリをDocker環境で構築
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
EXPOSE 80

# コンテナ起動時のコマンド
WORKDIR /one_sakura_sample
CMD npm start
```

#### ②作成したDockerfileを元に環境を構築
```
## Dockerfileを元にイメージを作成
sudo docker build -t one_sakura_sample/one_sakura_sample .

## イメージを元にコンテナを起動
sudo docker run -p 49160:80 -it one_sakura_sample/one_sakura_sample
```

#### ③ブラウザから起動したアプリの動作確認
http://localhost:49160/

## Bootstrap3日本語リファレンス
http://bootstrap3.cyberlab.info/
