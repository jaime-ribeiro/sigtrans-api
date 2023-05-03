import { PrismaClient } from '@prisma/client';

interface VeiculoSeed {
  placa: string;
  chassi: string;
  marca: string;
  modelo: string;
  uf: string;
  categoria: string;
  tipo: string;
  especie: string;
  ano: number;
}
function gerarChassi(): string {
  // sem "I","O" e "Q"
  const letrasNumeros = 'ABCDEFGHJKLMNPRTUVWXYZ0123456789';
  const padrao = 'XXXXXXXXXXXXX9999';
  let chassi = '';

  for (let i = 0; i < padrao.length; i++) {
    if (padrao[i] === 'X') {
      chassi += letrasNumeros[Math.floor(Math.random() * letrasNumeros.length)];
    } else {
      chassi += Math.floor(Math.random() * 10).toString();
    }
  }
  chassi = chassi.toUpperCase();
  return chassi;
}

function gerarPlaca(): string {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const padrao = 'AAA9A99';

  let placa = '';

  for (let i = 0; i < padrao.length; i++) {
    if (padrao[i] === 'A') {
      placa += letras[Math.floor(Math.random() * letras.length)];
    } else {
      placa += Math.floor(Math.random() * 10).toString();
    }
  }
  /*       placa = placa.toUpperCase(); */
  return placa;
}

function geraVeiculo(): VeiculoSeed {
  const placa = gerarPlaca();
  const chassi = gerarChassi();
  const marcas = [
    'Chevrolet',
    'Ford',
    'Fiat',
    'Volkswagen',
    'Renault',
    'Toyota',
  ];
  const modelos = ['Onix', 'Ka', 'Uno', 'Gol', 'Clio', 'Corolla'];
  const ufs = ['SP', 'RJ', 'MG', 'PR', 'RS', 'SC'];
  const categorias = ['Passeio', 'Utilitário', 'Caminhão', 'Moto'];
  const tipos = ['Novo', 'Usado'];
  const especies = ['Automóvel', 'Moto', 'Caminhão'];
  const ano = Math.floor(Math.random() * (2023 - 2000)) + 2000;

  const veiculo: VeiculoSeed = {
    placa: placa,
    chassi: chassi,
    marca: marcas[Math.floor(Math.random() * marcas.length)],
    modelo: modelos[Math.floor(Math.random() * modelos.length)],
    uf: ufs[Math.floor(Math.random() * ufs.length)],
    categoria: categorias[Math.floor(Math.random() * categorias.length)],
    tipo: tipos[Math.floor(Math.random() * tipos.length)],
    especie: especies[Math.floor(Math.random() * especies.length)],
    ano,
  };

  return veiculo;
}

const prisma = new PrismaClient();

async function seed(): Promise<void> {
  const veiculos = [];
  const QuantVeiculos = 150;
  for (let i = 0; i < QuantVeiculos; i++) {
    veiculos.push(geraVeiculo());
  }

  try {
    for (const veiculo of veiculos) {
      await prisma.veiculo.create({
        data: veiculo,
      });
    }
  } catch (err) {
    console.error('Seed falhou:', err);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
