var word2vec = require('word2vec')
var express = require('express')

word2vec.loadModel( './vectors.txt', function( error, model ) {
    console.log(model.getVectors(['50','34']));
});



class LegalPro{
    constructor(corpus,embeddings){
        this.corpus = corpus
        this.embeddings = embeddings
    }
    

    getTF(term,document){
        var term_count;
        var total_document_terms;
        return term_count/total_document_terms
    }
    getIDF(term,corpus){
        var term_count;
        var number_of_documents = corpus.length;
        return Math.log(number_of_documents/term_count)
        
    }

    assignNumericalEmbeddings(corpus){
        var emb_dic = []
        var embedding = []
        var count = 0
        for(let i of corpus){
            if(emb_dic.includes(i)){
                embedding.push(emb_dic.getIndex(i))
            }
            else{embedding.push(count);emb_dic.append(i)}
            count+=1
        }
        this.embeddings = embedding
    }
    
}