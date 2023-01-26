"# CataComB" 
A Cloud based private safe solution for securing our sensitive data

Introduction: -
> Importance of Data
> Data security
> Types of data security method used today
> Data accessibility
> Information Security and its advancements
> Authentication ways or Methods
> Implementation methods

Problem Statement: -
Many people have recently become more concerned about their data privacy and security. With the growing popularity of cloud-based smart solutions, providing users with a solution that is globally accessible and secure is extremely essential. 

Technology Stack: -
Version Control
> GitHub
> Git

Development
> Backend - Node.js, Express
> Frontend -  HTML, CSS, JS
> Java Version - Java 11

Database
> MongoDB
> AWS Cognito User Pool
> Deployment
> Aws

Project Management
> Github

AWS Services
> Cognito
> S3

Development Tools
> IntelliJ Ultimate
> Hyper Terminal

Methodology: -
> Authenticating the user with 2-step verification using AWS Cognito. 
> Compressing the data uploaded by the user using Huffman coding.
> Encrypting the compressed data using an encryption algorithm.
> Storing the encrypted data in an S3 bucket in their respective folder.

Huffman Coding: - Huffman coding is a lossless data compression algorithm. The idea is to assign variable-length codes to input characters, lengths of the assigned codes are based on the frequencies of corresponding characters. The most frequent character gets the smallest code and the least frequent character gets the largest code.

Advanced Encryption Satndard(AES): -
The Advanced Encryption Standard (AES) is a symmetric-key block cipher published by the National symmetric-key block cipher published by the National Institute of Standard and Technology (NIST)in Institute of Standards and Technology (NIST) in December 2001. AES is a non-Feistel cipher that encrypts and decrypts a data block of 128 bits. It uses 10, 12, or 14 rounds. The key size, which can be 128, 192, or 256 bits, depends on the number of rounds. AES has defined three versions, with 10, 12, and 14 rounds. Each version uses a different cipher key size (128, 192, or 256), but the round keys are always 128 bits

