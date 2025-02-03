<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{


    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'texto' => $this->texto,
            'imagen' => $this->imagen,
            // No incluimos 'created_at' ni 'updated_at'
        ];
    }
}
