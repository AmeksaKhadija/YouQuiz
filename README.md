# Contexte du projet
Vous travaillez pour une plateforme d'apprentissage en ligne, et votre mission est de créer un petit quiz interactif pour tester les connaissances des utilisateurs sur un sujet. L'application doit offrir une navigation intuitive, avec un retour visuel une fois que l'utilisateur termine le quiz, ainsi que le calcul et l'affichage du score final.

​

# Fonctionnalités requises

​

Affichage des questions :
Chaque question est affichée sur une page distincte avec une seule réponse possible.
L'utilisateur peut voir une seule question à la fois.
​

Navigation entre les questions :
Bouton Suivant : permet de passer à la question suivante.
Bouton Précédent : permet de revenir à la question précédente.
Lorsqu'il est sur la première question, le bouton Précédent est désactivé ou caché.
Lorsqu'il est sur la dernière question, le bouton Suivant est remplacé par un bouton Terminer.
​

Calcul et affichage du score :
Lorsqu'il clique sur Terminer, le score de l'utilisateur est calculé en fonction de ses réponses. Une page de résultats s'affiche avec le score final et un message récapitulatif.
​

​

# Histoires utilisateur

En tant qu'utilisateur, je souhaite pouvoir me déplacer entre les questions du quiz avec les boutons Précédent et Suivant pour une navigation fluide.
En tant qu'utilisateur, je veux voir un bouton Terminer à la fin du quiz pour soumettre mes réponses et afficher mon score.
En tant qu'utilisateur, je souhaite que mon score final s'affiche de manière claire après avoir terminé le quiz.
En tant qu'utilisateur, je souhaite recevoir un retour visuel des bonnes et mauvaises réponses pour mieux comprendre mes erreurs (optionnel).
En tant qu'utilisateur, je veux que mes réponses soient sauvegardées pour pouvoir continuer le quiz même si la page est actualisée (optionnel).
En tant qu'utilisateur, je souhaite être informé du temps restant pour répondre à chaque question, afin de garder un rythme soutenu (optionnel).
​

# Bonus (optionnel)

​

Affichage des bonnes réponses après l'affichage du score pour un retour pédagogique.
Timer par question : chaque question a un temps limité, et l'utilisateur passe automatiquement à la suivante lorsque le temps est écoulé.
Sauvegarde de la progression : les réponses sont sauvegardées dans le Local Storage, permettant à l’utilisateur de reprendre le quiz là où il s’est arrêté en cas de rafraîchissement de la page.
​

# Technologies utilisées

​

HTML pour la structure du quiz.
Bootstrap / TailwindCSS ou CSS pour le style et la mise en page.
JavaScript pour la logique de navigation, le calcul du score, et l'affichage conditionnel.
