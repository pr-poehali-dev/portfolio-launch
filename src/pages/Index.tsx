import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const skills = [
    { name: 'Figma', experience: '2+ года', level: 95 },
    { name: 'Adobe Photoshop', experience: '15+ лет', level: 98 },
    { name: 'CorelDRAW', experience: '15+ лет', level: 95 },
    { name: 'Tilda', experience: '2+ года', level: 90 },
    { name: 'HTML/CSS', experience: '2+ года', level: 85 },
    { name: 'After Effects', experience: '2+ года', level: 70 },
  ];

  const cases = [
    {
      id: 1,
      title: 'Редизайн корпоративного сайта',
      category: 'UX/UI Design',
      description: 'Полный редизайн сайта технологической компании с фокусом на конверсию',
      process: [
        'Анализ текущего сайта и пользователей',
        'Создание wireframes и пользовательских сценариев',
        'Разработка дизайн-системы в Figma',
        'Адаптация под мобильные устройства',
        'A/B тестирование ключевых элементов'
      ],
      tools: ['Figma', 'Photoshop', 'HTML/CSS'],
      result: 'Увеличение конверсии на 35%'
    },
    {
      id: 2,
      title: 'Брендинг стартапа',
      category: 'Brand Identity',
      description: 'Создание полноценного фирменного стиля для fintech стартапа',
      process: [
        'Исследование рынка и конкурентов',
        'Разработка концепции бренда',
        'Создание логотипа и айдентики',
        'Подготовка brand book',
        'Адаптация для цифровых и печатных носителей'
      ],
      tools: ['CorelDRAW', 'Photoshop', 'After Effects'],
      result: 'Успешный запуск продукта'
    },
    {
      id: 3,
      title: 'E-commerce платформа',
      category: 'Web Design',
      description: 'Дизайн интернет-магазина с интуитивным UX и высокой конверсией',
      process: [
        'Анализ поведения пользователей',
        'Оптимизация воронки продаж',
        'Создание адаптивного дизайна',
        'Настройка в Tilda с кастомным кодом',
        'Интеграция с платежными системами'
      ],
      tools: ['Figma', 'Tilda', 'HTML/CSS'],
      result: 'Рост продаж на 50%'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold font-['Montserrat']">
              Анна <span className="text-primary">Артемьева</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
              <a href="#skills" className="hover:text-primary transition-colors">Навыки</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-xs">15+ лет опыта</Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold font-['Montserrat'] leading-tight">
                    Анна <span className="text-primary">Артемьева</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Веб-дизайнер | UX/UI дизайнер | Графический дизайнер
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-lg">
                  Профессиональный графический и веб-дизайнер с 15-летним опытом работы 
                  в рекламных агентствах. Специализируюсь на создании комплексных 
                  визуальных решений — от фирменного стиля до адаптивных интерфейсов.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Icon name="Briefcase" size={20} className="mr-2" />
                    Смотреть работы
                  </Button>
                  <Button variant="outline" size="lg">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать CV
                  </Button>
                </div>

                <div className="flex gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Phone" size={16} />
                    +7 920 901-93-02
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Mail" size={16} />
                    El_anuta@mail.ru
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MessageCircle" size={16} />
                    @Yolanuta
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <img 
                    src="/img/8e204d9b-5008-4b9c-9f16-c02dbfcadcbf.jpg" 
                    alt="Анна Артемьева" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                  <Icon name="Palette" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/50 animate-slide-up">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-['Montserrat'] mb-4">Ключевые компетенции</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональные навыки, накопленные за годы работы в индустрии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in">
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.experience}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Графический дизайн</h3>
              <p className="text-sm text-muted-foreground">15+ лет опыта в разработке бренд-айдентики и подготовке макетов к печати</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Monitor" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Веб & UX/UI дизайн</h3>
              <p className="text-sm text-muted-foreground">2+ года в проектировании пользовательских интерфейсов и адаптивных сайтов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Комплексные решения</h3>
              <p className="text-sm text-muted-foreground">От идеи до реализации — полный цикл создания визуальных продуктов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-['Montserrat'] mb-4">Портфолио проектов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Детальные кейсы с описанием процесса работы и достигнутых результатов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {cases.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-fade-in">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="ExternalLink" size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 font-['Montserrat']">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Процесс работы:</h4>
                    <ul className="space-y-1">
                      {project.process.slice(0, 3).map((step, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-center">
                          <Icon name="Check" size={12} className="mr-2 text-primary flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                      {project.process.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          + ещё {project.process.length - 3} этапов
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">Результат:</span>
                      <span className="text-sm font-semibold">{project.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="Plus" size={20} className="mr-2" />
              Показать больше проектов
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-['Montserrat'] mb-6">Готовы начать проект?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь со мной для обсуждения вашего проекта. Готова к сложным и нестандартным задачам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 920 901-93-02
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
              <Icon name="Mail" size={20} className="mr-2" />
              El_anuta@mail.ru
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-secondary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground">
              © 2024 Анна Артемьева. Все права защищены.
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="outline" className="text-xs">
                Высшее профессиональное образование
              </Badge>
              <Badge variant="outline" className="text-xs">
                15+ лет опыта
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;