## Introducing Catacomb: Revolutionizing Data Security and Cloud Optimization

Welcome to Catacomb, an innovative platform designed to redefine the way we secure sensitive data and optimize cloud storage. Our cutting-edge solution combines advanced cloud-based technology with the power of Huffman coding, providing an unparalleled approach to safeguarding your valuable information by using AES algorithm for encryption while maximizing storage efficiency.

## Why did I build this?

I built Catacomb with a clear vision in mind: to provide a cloud-based private safe solution that combines robust security measures with efficient data compression techniques. By utilizing the trusted AES algorithm, Catacomb ensures that even the most sensitive data remains impervious to unauthorized access. With the inclusion of Huffman coding, we take data storage optimization to the next level, allowing users to make the most of their cloud storage resources.

Technology Stack: -
Version Control
- GitHub
- Git

Development
- Backend - Node.js, Express
- Frontend -  HTML, CSS, JS
- Java Version - Java 11

Database
- MongoDB

AWS Services
- Cognito
- S3

Development Tools
- IntelliJ Ultimate
- Hyper Terminal

Methodology: -
- Authenticating the user with 2-step verification using AWS Cognito.
- Compressing the data uploaded by the user using Huffman coding.
- Encrypting the compressed data using an AES algorithm.
- Storing the encrypted data in an S3 bucket in their respective folder.

Huffman Coding: - Huffman coding is a lossless data compression algorithm. The idea is to assign variable-length codes to input characters, lengths of the assigned codes are based on the frequencies of corresponding characters. The most frequent character gets the smallest code and the least frequent character gets the largest code.

Advanced Encryption Satndard(AES): -
The Advanced Encryption Standard (AES) is a symmetric-key block cipher published by the National symmetric-key block cipher published by the National Institute of Standard and Technology (NIST)in Institute of Standards and Technology (NIST) in December 2001. AES is a non-Feistel cipher that encrypts and decrypts a data block of 128 bits. It uses 10, 12, or 14 rounds. The key size, which can be 128, 192, or 256 bits, depends on the number of rounds. AES has defined three versions, with 10, 12, and 14 rounds. Each version uses a different cipher key size (128, 192, or 256), but the round keys are always 128 bits

## Local development

To ensure that you are able to install everything properly, we would recommend you to have <b>Git</b>, <b>NPM</b> and <b>Node.js</b> installed.

We will first start with setting up the Local Project Environment:

```sh
git clone https://github.com/sj1705/CataComB.git
cd CataComB-main
```
Now we will add the environment variables

 - Create a .env file and put your AWS account Keys
 - In that .env only also put your mongodb atlas URL

Once you run the Commands and get environment variables and everything fine, we are all set to run the app ✔️

On the root level run the following command:

```sh
node app.js
```

LINK TO Application of project:https://youtu.be/VspgJmjc4KY
