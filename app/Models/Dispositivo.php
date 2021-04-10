<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dispositivo extends Model
{
    use HasFactory;

    protected $table = 'dispositivos';

    protected $filliable = ['persona_id', 'estado_id', 'nombre', 'ubicacion', 'direccionmac', 'direccionip'];
    
}
