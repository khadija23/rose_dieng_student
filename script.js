// script.js

// 10 étudiants par défaut pour peupler la page initialement
const defaultStudents = [
    {
        id: 1,
        fullName: "Fatou Diop",
        major: "Ingénierie des Systèmes Intelligents",
        imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1b4dce?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "Passionnée par l'intelligence artificielle, j'ai rejoint l'URDFS pour participer au développement technologique de l'Afrique. J'aime le travail en équipe et l'approche par projet."
    },
    {
        id: 2,
        fullName: "Cheikh Ndiaye",
        major: "Énergies Renouvelables",
        imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "Conscient des enjeux environnementaux, je me forme aux énergies vertes. Mon but est de créer des solutions durables pour les zones rurales du Sénégal."
    },
    {
        id: 3,
        fullName: "Aïcha Sow",
        major: "Bio-informatique",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "L'intersection entre la biologie et l'informatique me fascine. L'URDFS m'offre un cadre idéal pour la recherche et l'innovation appliquée à la santé."
    },
    {
        id: 4,
        fullName: "Mamadou Fall",
        major: "Génie Civil et Urbanisme Durable",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "Mon rêve est de concevoir les villes africaines de demain. L'apprentissage par projet ici me permet de prototyper des infrastructures écologiques et intelligentes."
    },
    {
        id: 5,
        fullName: "Aminata Tall",
        major: "Data Science & Intelligence Artificielle",
        imageUrl: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "Les données sont le nouveau pétrole. Je me spécialise dans l'analyse de données pour aider les entreprises sénégalaises à prendre de meilleures décisions stratégiques."
    },
    {
        id: 6,
        fullName: "Abdou Aziz SAMB",
        major: "Data Scientist and AI",
        imageUrl: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "J'ai choisi cette formation car je veux aider aux entreprses affricaine de prendre des décisions"
    },
    {
        id: 7,
        fullName: "Khadija Ba",défis
        major: "Agro-industrie et Technologies Alimentaires",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "L'autosuffisance alimentaire est cruciale. J'étudie comment moderniser nos chaînes de transformation agricole tout en respectant l'environnement et nos traditions."
    },
    {
        id: 8,
        fullName: "Moussa Sarr",
        major: "Génie Mécanique et Automatisation",
        imageUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "De la conception 3D à la robotique, j'adore inventer des machines. Je veux créer des outils automatisés accessibles pour les artisans locaux."
    },
    {
        id: 9,
        fullName: "Ndeye Gaye",
        major: "Télécommunications et Réseaux",
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "Connecter les zones les plus reculées d'Afrique est mon ambition. La collaboration avec le monde socio-économique à l'URDFS me donne une vision concrète du terrain."
    },
    {
        id: 10,
        fullName: "Lamine Touré",
        major: "Management de l'Innovation",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        description: "Je fais le pont entre la technologie et le business. Mon objectif est d'accompagner la création de startups technologiques viables issues de la recherche universitaire."
    }
];

// Fonction pour récupérer les étudiants (depuis le localStorage ou ceux par défaut)
function getStudents() {
    // J'utilise une nouvelle clé 'urdfs_students_v2' pour forcer le rafraîchissement 
    // et être sûr que vous voyez les 10 nouveaux étudiants
    const storedStudents = localStorage.getItem('urdfs_students_v2');
    if (storedStudents) {
        return JSON.parse(storedStudents);
    } else {
        // Sauvegarder les étudiants par défaut dans le localStorage pour la première fois
        localStorage.setItem('urdfs_students_v2', JSON.stringify(defaultStudents));
        return defaultStudents;
    }
}

// Fonction pour sauvegarder un nouvel étudiant
function saveStudent(student) {
    const students = getStudents();
    students.push(student);
    localStorage.setItem('urdfs_students_v2', JSON.stringify(students));
}

// Fonction pour générer le HTML d'une carte étudiant
function createStudentCard(student) {
    // Image par défaut si aucune URL n'est fournie
    const imgUrl = student.imageUrl && student.imageUrl.trim() !== "" 
        ? student.imageUrl 
        : "https://ui-avatars.com/api/?name=" + encodeURIComponent(student.fullName) + "&background=003366&color=fff&size=300";

    return `
        <div class="student-card">
            <div class="student-card-header">
                <img src="${imgUrl}" alt="Photo de ${student.fullName}">
                <h3>${student.fullName}</h3>
                <h4>${student.major}</h4>
            </div>
            <div class="student-card-body">
                <p>"${student.description}"</p>
            </div>
        </div>
    `;
}

// Fonction pour afficher tous les étudiants sur la page
function renderStudents() {
    const container = document.getElementById('students-container');
    const students = getStudents();
    
    // Vider le conteneur
    container.innerHTML = '';
    
    // Ajouter les étudiants (du plus récent au plus ancien pour voir les ajouts en premier)
    [...students].reverse().forEach(student => {
        container.innerHTML += createStudentCard(student);
    });
}

// Gestionnaire d'événement pour le formulaire
document.getElementById('add-student-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    
    // Récupérer les valeurs du formulaire
    const fullName = document.getElementById('fullName').value;
    const major = document.getElementById('major').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const description = document.getElementById('description').value;
    
    // Créer un nouvel objet étudiant
    const newStudent = {
        id: Date.now(), // Utilise le timestamp comme ID unique
        fullName: fullName,
        major: major,
        imageUrl: imageUrl,
        description: description
    };
    
    // Sauvegarder et réafficher
    saveStudent(newStudent);
    renderStudents();
    
    // Réinitialiser le formulaire
    this.reset();
    
    // Message de confirmation et défilement vers la liste
    alert("Votre profil a été ajouté avec succès à l'annuaire !");
    document.getElementById('students').scrollIntoView({ behavior: 'smooth' });
});

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', renderStudents);