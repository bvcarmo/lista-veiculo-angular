const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('', () => 

  describe('/GET Veiculos', () => {
        it('Testando GET todos os Veiculos', (done) => {
            chai.request('http://localhost:3000') 
                .get('/api/veiculos') 
                .end((err, res) => { 
                    res.should.have.status(200); 
                    res.body.should.be.a('array'); 
                  done();
                });
        });
  }),

  describe('/GET Veiculo', () => {
    it('Testando GET de um veículo', (done) => {
        chai.request('http://localhost:3000') 
            .get('/api/veiculo/15') 
            .end((err, res) => { 
                res.should.have.status(200); 
                res.body.should.be.a('array'); 
              done();
            });
    });
  }),
  
  describe('/DELETE Veiculo', () => {
    it('Testando DELETE de um veículo', (done) => {
        chai.request('http://localhost:3000') 
            .delete('/api/veiculo/15')
            .end((err, res) => { 
                res.should.have.status(200); 
                res.body.should.be.a('object'); 
              done();
            });
    });
  }),

  describe('/POST Veiculo', () => {
    it('Testando POST de um veículo', (done) => {
        let veiculo = {
            placa: "ttt4323", 
            chassi: "123221sq221w",
            renavam: 1212211212,
            marca: "FIAT",
            modelo: "TORO",
            ano: "2018"
        }
          chai.request('http://localhost:3000')
          .post('/api/veiculo')
          .send(veiculo) 
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });

  }),

  describe('/PUT Veiculo', () => {
    it('Testando PUT de um veículo', (done) => {
        let veiculo = {
            placa: "ttt4323", 
            chassi: "123221sq221w",
            renavam: 1212211212,
            marca: "FIAT",
            modelo: "TORO",
            ano: "2018"
        }
          chai.request('http://localhost:3000')
          .put('/api/veiculo/17')
          .send(veiculo)
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });

  })


  
)