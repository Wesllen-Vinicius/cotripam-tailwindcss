-- CreateTable
CREATE TABLE "funcoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_funcao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "permissoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "permissoes_perfil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "permissoesId" INTEGER NOT NULL,
    "perfilId" INTEGER NOT NULL,
    CONSTRAINT "permissoes_perfil_permissoesId_fkey" FOREIGN KEY ("permissoesId") REFERENCES "permissoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "permissoes_perfil_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "perfil" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "perfil" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "unidades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "created_At" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meta_tripaCozida" REAL NOT NULL,
    "meta_serosa" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_At" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unidade_Id" INTEGER NOT NULL,
    CONSTRAINT "users_unidade_Id_fkey" FOREIGN KEY ("unidade_Id") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "media_prod" INTEGER
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "created_At" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifi_At" DATETIME,
    "categoria_id" INTEGER NOT NULL,
    "unidadeId" INTEGER,
    "userId" INTEGER,
    "categoriaId" INTEGER NOT NULL,
    CONSTRAINT "produtos_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "produtos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "produtos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "abates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" DATETIME,
    "abate" REAL NOT NULL,
    "bois" REAL NOT NULL,
    "vacas" REAL NOT NULL,
    "total" REAL NOT NULL,
    "condenados" REAL NOT NULL,
    "unidade_id" INTEGER,
    "userId" INTEGER,
    CONSTRAINT "abates_unidade_id_fkey" FOREIGN KEY ("unidade_id") REFERENCES "unidades" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "abates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Receita_itens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "receita_id" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "receitaId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "Receita_itens_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Receita_itens_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "Receita" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Receita" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ProducaoItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantidade" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    CONSTRAINT "ProducaoItem_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Producao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unidadeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "producaoItemId" INTEGER NOT NULL,
    CONSTRAINT "Producao_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Producao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Producao_producaoItemId_fkey" FOREIGN KEY ("producaoItemId") REFERENCES "ProducaoItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
