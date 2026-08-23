export interface Proposal {
  id: string;
  category: 'saude' | 'educacao' | 'emprego' | 'seguranca' | 'infraestrutura' | 'agricultura';
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  keyInitiatives: string[];
  impactTarget: string;
}

export interface CampaignEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  city: string;
  location: string;
  type: 'caminhada' | 'carreata' | 'plenaria' | 'encontro';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  quote: string;
  avatarUrl?: string;
}

export interface DownloadMaterial {
  id: string;
  title: string;
  category: 'adesivo' | 'santinho' | 'card' | 'proposta' | 'jingle';
  description: string;
  fileSize: string;
  format: string;
  previewColor: string;
}

export interface CitizenSuggestion {
  id: string;
  name: string;
  city: string;
  neighborhood: string;
  category: string;
  message: string;
  date: string;
  likes: number;
}
