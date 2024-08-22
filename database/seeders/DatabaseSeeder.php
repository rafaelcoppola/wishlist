<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        DB::table('products')->insert(
            [
                'name' => 'Notebook Gamer ASUS TUF Gaming',
                'description' => 'Core I7, 16 GB, 512 GB, Nvídia RTX3050, Windows 11 Home, Mecha Gray - FX507ZC4-HN113W',
                'image' => 'notebook.jpg'
            ],
        );

        DB::table('products')->insert(
            [
                'name' => 'C3Tech Base para Notebook Gamer',
                'description' => 'NBC-510BK ate 17,3" Preto com 6 opções de inclinações Iluminação RGB e display digital para controle',
                'image' => 'base_notebook.jpg'
            ],
            
        );
        
        DB::table('products')->insert(
            [
                'name' => 'Redragon Mouse M801',
                'description' => 'Mouse LED RGB retroiluminado MMO 9 botões programáveis com botões laterais de gravação macro botão de disparo rápido para computador',
                'image' => 'teclado.jpg'
            ],
        );

        DB::table('products')->insert(
            [
                'name' => 'Controle Xbox',
                'description' => 'Controle Sem Fio Xbox + Cabo USB',
                'image' => 'controle_xbox.jpg'
            ],
        );

        DB::table('products')->insert(
            [
                'name' => 'Mouse Pad Gamer Com Estampa',
                'description' => 'Tema Mapa Mundi Extra Grande 90x40 cm com Bordas Costuradas e base Antiderrapante Desk Pad para Teclado Mouse Notebook PC',
                'image' => 'mouse_pad.jpg'
            ],
        );

        DB::table('products')->insert(
            [
                'name' => 'Galaxy Tab A9+ 5G',
                'description' => 'Grafite, Tela 11", 64 GB, 4GB RAM, Câmera Frontal 5 MP Câmera Principal 8 MP',
                'image' => 'tablet.jpg'
            ],
        );
    }
}
